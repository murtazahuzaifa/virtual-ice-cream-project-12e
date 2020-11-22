import React, { FC } from 'react';
import { Formik, Form, ErrorMessage, Field, FormikHelpers } from 'formik';
import { ColorState } from '../ColorPalette';
import { IceCreamType } from '../../typedefs';
import * as s from './style';
import axios from 'axios';

// export type IceCreamColors = { col1: string, col2: string, col3: string }
export interface FormFields {
    to: string; message: string; from: string,
}

type QueryResponseType = {data:{data:{addIceCream:IceCreamType}}}
const query = (receiverName: string, senderName: string, message: string, color1: ColorState['color1'], color2: ColorState['color2'], color3: ColorState['color3']) => (
    `mutation {
        addIceCream(receiverName:"${receiverName}" senderName:"${senderName}" message:"${message}" color1:"${color1}" color2:"${color2}" color3:"${color3}" ){
          id 
          ts
          receiverName
          senderName
          message
          iceCreamColor{
            color1 color2 color3
          }
        }
      }`)

const onValidation = (values: FormFields) => {
    const error: { [P in keyof FormFields]?: string } = {}
    if (values.from === '') { error.from = 'Your name required' }
    if (values.message === '') { error.message = 'Message required' }
    if (values.to === '') { error.to = `Receiver's name required` }

    return error
}
const formInitialValues: FormFields = {
    from: '', message: '', to: '',
}

export interface Props {
    iceCreamColor: ColorState,
    onSubmitStart?: () => void,
    onSubmitEnd?: (res: IceCreamType) => void,
}
const CreateIceCreamForm: FC<Props> = ({ iceCreamColor, onSubmitStart, onSubmitEnd }) => {

    const onSubmit = async ({ to, from, message }: FormFields, { setSubmitting, resetForm }: FormikHelpers<FormFields>) => {
        // console.log("values", values, '\n', "Colors", iceCreamColor);
        const { color1, color2, color3 } = iceCreamColor;
        onSubmitStart && onSubmitStart();
        const url = '/.netlify/functions/graphql'
        try {
            const {data} = await axios.post<{},QueryResponseType>(url, JSON.stringify({ query: query(to, from, message, color1, color2, color3) }),
                {
                    headers:
                        { "content-type": "application/json" }
                })
            resetForm();
            const res = data.data.addIceCream
            onSubmitEnd && onSubmitEnd({ id: res.id, ts: res.ts, message: res.message, receiverName: res.receiverName, senderName: res.senderName, iceCreamColor: res.iceCreamColor })
            setSubmitting(false);
        } catch (err) {
            console.log(err)
            setSubmitting(false);
        }
    }

    return (
        <s.Container>
            <Formik initialValues={formInitialValues} onSubmit={onSubmit} validate={onValidation} >
                {(formik) => (
                    <Form>
                        <s.InputLable htmlFor="_to">
                            <span>To</span>
                            <Field id="_to" name='to' type='text' placeholder={`Receiver's name`} />
                            <ErrorMessage name='code' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />
                        </s.InputLable>
                        <s.InputLable htmlFor="_message">
                            <span>Message</span>
                            <Field as={'textarea'} id="_message" name='message' type='text-area' placeholder='Your message' />
                            <ErrorMessage name='name' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />
                        </s.InputLable>
                        <s.InputLable htmlFor="_from">
                            <span>From</span>
                            <Field id="_from" name='from' type='text' placeholder='Your name' />
                            <ErrorMessage name='price' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />
                        </s.InputLable>
                        <div style={{ display: "flex" }}>
                            <s.SubmitBtn type='submit' disabled={!formik.dirty || !formik.isValid}>Freeze</s.SubmitBtn>
                        </div>
                    </Form>
                )}
            </Formik>
        </s.Container>
    )
}

export default CreateIceCreamForm;
