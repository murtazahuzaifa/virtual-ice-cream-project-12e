import React, { FC } from 'react';
import { Formik, Form, ErrorMessage, Field, FormikHelpers } from 'formik';
import { ColorState } from '../ColorPalette';
import * as s from './style';

// export type IceCreamColors = { col1: string, col2: string, col3: string }
export interface FormFields {
    to: string; message: string; from: string,
}

const onSubmit = (iceCreamColor: ColorState) => async (values: FormFields, { setSubmitting, resetForm }: FormikHelpers<FormFields>) => {
    setTimeout(() => {
        console.log("values", values, '\n', "Colors", iceCreamColor);
        resetForm();
        setSubmitting(false);
    }, 2000)
}
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

export interface Props { iceCreamColor: ColorState }
const CreateIceCreamForm: FC<Props> = ({ iceCreamColor }) => {

    return (
        <s.Container>
            <Formik initialValues={formInitialValues} onSubmit={onSubmit(iceCreamColor)} validate={onValidation} >
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
                            <s.SubmitBtn type='submit' disabled={!formik.dirty || !formik.isValid}>SUBMIT</s.SubmitBtn>
                        </div>
                    </Form>
                )}
            </Formik>
        </s.Container>
    )
}

export default CreateIceCreamForm;
