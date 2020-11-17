import React, { FC } from 'react';

const st5 = '#E62B42';
const st6 = '#C69C6D';
const st7 = '#F5D4DB';
const st8 = '#EFE7DF';
const st9 = '#ECD1CB';
const st10 = '#E9426A';
const st11 = '#FFFFFF';
const st12 = '#F9CCCD';
const st13 = '#FFFEFE';
const st14 = '#EE7594';

export interface Props {
	crmlayer1?: string,
	crmlayer2?: string,
	crmlayer3?: string,
	crmlayer4?: string,
	cherry?: string,
	biscuit?: string,
}

const IceCream: FC<Props> = ({
	crmlayer1 = '#F3A4BC',
	crmlayer2 = '#E9416A',
	crmlayer3 = '#F9CCCE',
	crmlayer4 = '#F3A4BC',
	cherry = '#E62B42',
	biscuit = '#C69C6C',
}) => {
	return (
		<div style={{width:'100%'}}>
			<svg x="0px" y="0px" viewBox="0 -2 308.9 689.3">
				<g>
					<path fill={biscuit} d="M235.6,387.6c-7.6,26.7-15.2,53.4-22.8,80.1c-20.6,72.4-62.4,219.7-63,221.6c-1.7-5.9-32.1-113-45.8-161.2
		C90,478.7,76,429.3,62,380c-0.1-0.5-0.3-1-0.5-1.5c-0.7-0.5-1-1.3-1.2-2.1c-0.4-1-0.6-2.2-1-3.2c-1.6-7-1.8-14.1,0-21.1
		c2.1-8,8.9-13.2,17.2-13.4c7-0.2,13.8,0.5,20.1,4c7.7,4.2,12.7,10.7,16.3,18.5c4.8,10.4,6.7,21.6,7.8,32.9c0.6,6.1,1,12.2,1,18.3
		c0,9.3-0.4,18.7-1.7,28c-1.5,10.4-2.4,20.9-1.9,31.5c0.3,5.8,1.2,11.4,3.8,16.7c1.6,3.2,4.1,4.6,7.6,4.6c6-0.1,11.4-4.1,13.3-10.1
		c1.9-6.3,1.8-12.8,0.9-19.2c-1.9-14.4-6.2-28.3-10.5-42.1c-2.3-7.7-4.9-15.3-6.4-23.2c-2.3-12.6-1.4-24.9,3.2-36.9
		c3.8-10,13.2-16.2,24.8-16.4c4.8-0.1,9.5-0.2,14.3,0c11.3,0.4,22.2-1.4,33.2-3.7c4.9-1.1,9.9-1.9,15-1.5
		c8.6,0.7,13.7,5.8,16.9,13.2c3.7,8.5,4.3,17.4,3.6,26.5c-0.1,1.6-0.2,3.2-0.5,4.8C236.8,385.6,236.6,386.8,235.6,387.6z"/>
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="79.5" y1="443.1" x2="189.4" y2="550.2" />
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="58.4" y1="356.6" x2="204.1" y2="498.5" />
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="104" y1="335" x2="218.2" y2="446.3" />
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="244.1" y1="297" x2="91.2" y2="482.6" />
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="170.8" y1="323.2" x2="78.2" y2="435.6" />
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="244" y1="358.2" x2="104" y2="528" />
					<path fill={crmlayer3} d="M6,299.5c-0.7-9,3.5-15.9,9.1-22.2c4-4.5,8.3-8.7,13.2-12.2c1.1-0.8,1.6-2,2-3.4c3.5-12.2,8.3-23.9,15.6-34.4
		c0.7-0.5,1.2-0.1,1.7,0.3c5.4,4,11.3,7,17.4,9.8c6.2,2.9,8.7,7.7,8.7,14.2c0,3.4,0.5,6.8,1.2,10.2c0.8,3.5,3,5.4,6.6,5.6
		c1.3,0.1,2.5,0.1,3.8,0c4.1-0.4,6.1-2.3,6.8-6.4c0.7-4,0.6-8,0.2-12.1c-0.6-5.5-0.3-11,0.7-16.4c0.8-4.2,3.1-7.7,6.4-10.4
		c10.5-8.9,22.6-13.9,36.3-15.1c3-0.3,5.9,0.1,8.8,1c5.6,1.7,8.2,5.9,7.7,11.7c-0.4,5.9-1.5,11.8-1.6,17.7
		c-0.1,5.8,0.6,11.7,3.1,17.1c0.4,0.8,0.9,1.6,1.4,2.3c1.3,1.8,2.8,2,4.7,0.9c4-2.2,5.8-5.6,5.2-10.4c-0.7-5.6-1.6-11.2-2.9-16.7
		c-0.8-3.4-1.6-6.8-1.8-10.3c-0.7-11.5,4.3-20.1,13.4-26.7c6.4-4.6,13.2-8.7,20.3-12.3c9.3-4.8,18.9-8.9,27.3-15.2
		c9.8-7.3,18.8-15.4,25.8-25.5c2.4-3.4,4.4-7,5.8-10.9c0.3-0.8,0.3-1.9,1.5-2c0.1,1.1,0.8,1.5,1.6,1.9c14.1,6.7,21.5,18.6,25,33.2
		c3.2,12.9,2.9,25.8-1.7,38.4c-1.5,4.1-3.6,7.8-5.9,11.5c-0.3,0.5-0.6,0.9-0.6,1.5c-0.4,1.9-1.8,3.1-3,4.4
		c-5.1,5.3-10.1,10.7-15.3,16c-5,5-9.8,10.3-14.3,15.8c-6.3,7.7-9.4,16.6-9.7,26.4c-0.2,4.8,0.9,9.5,1.8,14.2c1,5.1,2,10.3,2.2,15.5
		c0.4,7.4-1.6,13.9-8.1,18.4c-3.5,2.4-5.9,2-8.3-1.5c-2.8-4.1-3.9-8.7-4-13.5c-0.1-6.2,0.1-12.4-0.1-18.6
		c-0.1-6.7-2.8-10.8-7.8-12.6c-6.1-2.2-12.9-0.4-17.3,4.4c-3,3.3-5.8,6.7-8.1,10.4c-5.8,9.3-14.2,15-24.2,18.9
		c-9.7,3.7-19.7,5.7-29.9,6.6c-14.1,1.2-28.3,1.9-42.5,2.7c-12.5,0.8-24.9,1.5-37.4,2.2c-8.9,0.5-17.5-0.3-25.7-3.3
		c-8.1-2.9-13.2-8.9-15.3-17.2C5.6,301.9,5.2,300.7,6,299.5z"/>
					<path fill={crmlayer4} d="M6,299.5c1.9,12.4,9.2,19.6,21.9,22.2c9.5,1.9,19,1.5,28.6,0.7c3.7-0.3,7.5-0.3,11.3-0.6
		c7.2-0.5,14.5-0.7,21.7-1.2c10.8-0.7,21.6-1.3,32.4-2.1c14.3-1.1,28.3-3.5,41.2-10c6.6-3.3,12-8,16.2-14.2
		c3.5-5.2,6.9-10.5,12-14.4c6.6-5.1,17.4-3.6,21.6,2.9c1.6,2.5,2,5.4,2.1,8.2c0.1,6.5-0.1,13,0.1,19.4c0.1,4.5,1.3,8.9,3.9,12.7
		c2,2.9,3.8,3.2,6.8,1.2c6.8-4.4,8.5-11.4,7.9-18.8c-0.7-9.2-3.6-18.1-3.9-27.3c-0.3-9.5,2.5-18.3,8.1-26
		c5.3-7.2,11.5-13.6,17.7-19.9c5.4-5.5,10.8-11,15.8-16.9c0.4-0.5,1-0.8,1.4-1.2c10.6-0.5,19.4,3.2,26.1,11.5
		c5.2,6.4,8.1,14,9.4,22.1c2,12.6-0.8,24-9.2,33.7c-6.3,7.3-13.4,13.8-20.9,19.8c-8.4,6.7-16.9,13.4-23.7,21.8
		c-0.6,0.7-1.4,1.4-1.4,2.4c-8.3,11.5-10.9,24.5-10.6,38.4c-0.7,4.5,0.6,8.7,1.6,12.9c3.2,13.3,6.7,26.4,10,39.7
		c1.8,7.3,2.9,14.6,0.9,22.1c-0.6,2.4-1.6,4.5-3.4,6.3c-3.8,3.8-8.9,3.4-12.1-0.9c-2.9-3.9-3.9-8.4-4.4-13.1
		c-1.3-11.9,0.4-23.6,1-35.5c0.1-2.1,0.1-4.1,0.2-6.2c0.5-1.4-0.3-3,0.5-4.4c0.5-7.6,1.1-15.2-0.5-22.8c-1-4.6-2.5-9-5.1-13
		c-4.7-7.3-11.7-8.9-19.8-8.2c-8.2,0.8-16.2,3.3-24.4,4.3c-6.3,0.8-12.5,0.9-18.8,0.8c-5.7-0.1-11.5-0.3-17.2,0.5
		c-10.3,1.4-17.1,7.2-20.5,16.8c-5,14.2-4.9,28.5-0.8,42.9c4.3,15,9.5,29.8,12.8,45.1c1.9,8.5,3.3,17.1,2.5,25.9
		c-0.8,8.7-5,14.5-12.3,16.4c-5.7,1.4-9.4-0.3-11.8-5.6c-2.2-5-3.2-10.3-3.4-15.7c-0.6-12.1,1-24,2.3-36c1.5-12.9,1.5-25.8,0.5-38.8
		c-0.8-9.8-2-19.5-5.1-28.8c-3-9-7.3-17.2-15.2-23c-7.9-5.9-17-7.3-26.4-5.8c-7.7,1.2-12.7,7.1-14,15.2c-1,6.2-0.5,12.4,0.6,18.5
		c0.5,0.9-0.1,2,0.7,2.8c0.4,1.1-0.1,2.2,0.3,3.3c0.6,5.2,1.1,10.3,1.9,15.5c0.4,2.5,0,4.8-0.6,7.2c-0.5,2-1.9,2.9-4,2.7
		c-5.6-0.3-9.5-3.5-10.8-8.9c-1.5-5.8-1.2-11.7-0.8-17.7c0.7-9.2,1.7-18.5,0.2-27.7c-1.6-9.4-6.7-15.8-16-18.8
		c-5.7-1.8-11.4-3.8-17-5.9c-5.4-2-9.5-5.8-12.2-10.9C-1.5,309-0.2,304.4,6,299.5z"/>
					<path fill={crmlayer2} d="M254.4,127.7c-4.8,14.5-15.3,24.5-26.4,34c-7.7,6.7-16.6,11.7-25.7,16.2c-10.4,5-20.6,10.4-29.7,17.4
		c-10.2,7.9-13.5,18.3-10.7,30.7c1.5,6.8,2.9,13.5,3.9,20.4c0.8,5.9-1,9.8-6,12.3c-2.1,1.1-3.8,0.7-5.1-1.2c-3-4.3-3.7-9.3-4.4-14.3
		c-0.8-5.8,0.2-11.5,0.8-17.2c0.3-2.8,0.6-5.6,0.6-8.3c0-4.2-2.6-7.5-6.6-8.9c-5.7-2-11.4-1.1-17,0.1c-10.3,2-19.3,6.6-27.4,13.2
		c-5.5,4.5-7.6,10.5-7.5,17.4c0.1,5,0.2,10.1,0.4,15.1c0.1,2.3-0.1,4.5-0.4,6.7c-0.5,3.5-2.4,5.7-5.9,6.5c-2.4,0.5-4.8,0.6-7.2,0.1
		c-3.2-0.7-5.2-2.8-5.8-6c-0.7-3.6-1.2-7.3-1.2-11c0-5.9-2.6-10.2-8.1-12.9c-6.6-3.1-13.2-6.2-18.9-10.8c-7.2-8-8.6-17.7-7.9-28
		c0.7-10.8,4.6-20.5,11.8-28.6c6.7-7.5,14.5-13.4,23.6-17.7c10.4-4.8,20.8-9.3,31.3-14c0.8-0.6,1.6-0.3,2.3,0
		c8.7,3,17.6,2.4,26.4,1.1c10.8-1.6,20.8-5.6,31-9.2c4.1-1.5,8-3.2,12.2-4.3c4.8-1.2,9.6-1.2,14.1,1.4c4.4,2.6,6.5,6.6,7.6,11.3
		c1.1,4.6,2,9.3,2.8,14c0.5,3.1,1.5,6.1,2.9,9c0.9,2,2.1,4,4.7,3.9c2.7,0,4.4-1.9,5.4-4.2c1.4-3.2,1.6-6.7,1.4-10.1
		c-0.1-2.7-0.4-5.4-0.3-8.1c0.2-6.3-0.4-12.6-0.5-18.9c-0.2-5.9,1.7-11.3,4.8-16.3c3.3-5.2,7.6-9.5,11.7-14.1
		c4.1-4.7,8.5-9.1,10.9-15c0.2-0.4,0.5-0.7,0.9-0.9c8.7,6.8,12.6,16.1,13.4,26.8C257.1,112.9,256.3,120.4,254.4,127.7z"/>
					<path fill={crmlayer1} d="M243.1,78.6c-1.3,5.8-5.4,9.8-9.1,14.1c-3.9,4.5-8,8.8-11.7,13.4c-5.9,7.2-7.6,15.5-6.5,24.8
		c0.7,5.5,0.1,11.1,0.4,16.7c0.2,4.3,0.3,8.6-0.6,12.8c-0.2,1.1-0.6,2.1-1.2,3c-3.2,5.1-8,5-10.8-0.3c-2.5-4.8-3.3-10.2-4.2-15.5
		c-0.5-3-1.1-6-1.9-8.9c-2.4-9.3-10-13.9-19.3-11.6c-8,2-15.4,5.4-23.2,8.1c-10.7,3.7-21.4,6.6-32.8,6.8c-6,0.1-11.8-0.8-17.4-2.9
		c-13.1-7.4-13.1-23.7-8.6-35.2c5.4-14,15-24.7,27.2-33.3c4.6-3.3,9.4-6.3,14.6-8.5c0.8-0.3,1.5-0.6,1.5-1.7c1.5,0,1.8,1.3,2.4,2.2
		c5.5,7.5,12.4,13.2,21.3,16.2c7.5,2.5,14.9,1.3,22.4-0.2c14.8-3.1,23.1-12.6,26.4-26.9c0.2-1-0.1-2.3,1.4-2.6
		c0.1,0.6,0.5,0.8,1.2,0.7c2.4-0.5,5-0.7,7.4-1.4c5.7-1.7,10.5,0.1,14.4,4c6.9,6.9,8.4,15.5,7.1,24.9
		C243.3,77.6,243.2,78.1,243.1,78.6z"/>
					<path fill={cherry} d="M213.3,48.9c-1.1,5.1-2.5,10.1-5.1,14.6c-5.5,9.5-14.1,14.3-24.5,16.2c-7.4,1.3-14.7,2.1-22-0.7
		c-9.6-3.7-16.7-10.2-22.3-18.7c-6.8-10.5-8.3-21.9-5.6-33.9c3.4-15.1,16.3-25.7,33.1-27.7c7.1-0.9,14-0.6,20.8,1.3
		c16.2,4.4,26.4,17.7,26.7,34.7C214.5,39.5,214.1,44.2,213.3,48.9z"/>
					<path fill={st6} d="M242.4,363.9c-1.1-5.3-0.6-10.7,0.3-16c1.2-7.8,4.4-14.9,9-21.3c0.4-0.5,0.6-1.1,1.4-1.1
		c-2.4,8.6-4.7,17.1-7.1,25.7C244.7,355.4,243.6,359.6,242.4,363.9z"/>
					<path fill={st7} d="M236.6,384.8c-0.1,1.5,0.5,3-0.5,4.4c-0.1-0.6,0-1.2-0.5-1.6C235.7,386.6,236,385.6,236.6,384.8z" />
					<path fill={st8} d="M61,379.5c-0.8-1-0.4-2.2-0.6-3.3c0.2-0.2,0.3-0.2,0.5,0c0.2,0.7,0.4,1.5,0.5,2.2
		C61.4,378.8,61.2,379.1,61,379.5z"/>
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="104" y1="528" x2="175.8" y2="598" />
					<path fill={st9} d="M61,376.2c-0.2,0-0.3,0-0.5,0c-0.7-0.8-0.4-1.8-0.4-2.8C60.7,374.2,60.6,375.3,61,376.2z" />
					<path fill={st10} d="M209.6,230.5c0,1.1-0.5,2.1-1.2,2.9c-4.5,5.4-9,10.7-13.5,16.1c-0.6,0.7-1.4,1.2-2.2,1.5
		c-1,0.4-1.8,0.5-2.6-0.5c-0.7-0.9-0.4-1.7,0.2-2.4c1.6-2,3.1-3.9,4.8-5.8c3.7-4.3,7.3-8.6,11-12.9c0.7-0.8,1.5-1.4,2.6-0.9
		C209.5,228.8,209.7,229.6,209.6,230.5z"/>
					<path fill={st10} d="M242.4,202.6c-0.7-0.2-1.6-0.4-2.4-0.7c-6.2-2.4-12.3-4.9-18.5-7.4c-0.3-0.1-0.7-0.2-1-0.5
		c-1.2-0.9-2.8-1.8-2-3.6c0.8-1.8,2.4-1.1,3.7-0.5c7.1,2.8,14.2,5.7,21.2,8.6c1.1,0.4,2.3,1,1.9,2.5
		C245.1,202.4,243.8,202.4,242.4,202.6z"/>
					<path fill={st11} d="M194.4,200.1c3.3,0,5.4,1.7,5.5,4.6c0.1,3.3-2.2,5.7-5.4,5.7c-2.8,0-5.4-2.7-5.4-5.6
		C189.1,201.7,190.9,200.2,194.4,200.1z"/>
					<path fill={st11} d="M111.3,233.2c0.1-2.9,2.2-4.8,5.4-4.8c3.1,0,5.5,2.3,5.4,5.1c-0.1,3.1-2.6,5.5-5.5,5.4
		C113.7,238.9,111.2,236.1,111.3,233.2z"/>
					<path fill={st12} d="M142.2,158.2c0,1.3-0.4,2.3-1.2,3.3c-4.4,5.2-8.8,10.4-13.2,15.6c-0.4,0.5-0.8,1-1.4,1.3
		c-1.1,0.6-2.2,1.4-3.4,0.3c-1.4-1.2-0.4-2.3,0.4-3.2c5.1-6,10.2-12,15.3-18c0.6-0.7,1.3-1.6,2.5-1
		C142,156.6,142.3,157.4,142.2,158.2z"/>
					<path fill={st12} d="M85.3,204c-1.2-0.2-2.1-0.8-3-1.7c-4.8-4.7-9.7-9.3-14.5-14c-0.5-0.5-1-1.1-1.3-1.7c-0.5-1-1.1-2.2,0.1-3.2
		c1.2-1.1,2.2-0.3,3.1,0.5c3.5,3.3,6.9,6.6,10.3,9.9c2.3,2.2,4.7,4.5,6.9,6.8c0.7,0.7,1.3,1.6,0.6,2.7C87,204,86.2,204.1,85.3,204z"
					/>
					<path fill={st13} d="M169.1,152c3.3,0,5.3,1.8,5.3,4.7c0,3.4-2,5.5-5.2,5.6c-2.9,0-5.5-2.6-5.5-5.5
		C163.8,153.8,165.9,152,169.1,152z"/>
					<path fill={st13} d="M90.3,167.3c-3,0-5.5-2.4-5.5-5.4c0-2.9,2.1-4.8,5.3-4.9c3.1,0,5.3,1.9,5.4,4.8
		C95.6,165.3,93.6,167.3,90.3,167.3z"/>
					<path fill={st14} d="M135,101.6c0,0.1-0.2,0.8-0.5,1.4c-2.9,6.1-5.9,12.1-8.8,18.2c-0.1,0.2-0.2,0.3-0.3,0.5
		c-1,1.5-2.2,3.4-4.2,2.5c-2.4-1.1-0.6-3,0-4.4c2.9-6.1,5.9-12.1,8.8-18.2c0.4-0.7,0.7-1.5,1.2-2.1c0.6-0.7,1.2-1.7,2.4-1.3
		C134.8,98.7,135.2,99.8,135,101.6z"/>
					<path fill={st14} d="M203,95.9c-1.4-0.1-2.4-0.5-2.8-1.7c-0.4-1.4,0.8-2,1.6-2.5c3.6-1.9,7.2-3.7,10.8-5.5c3-1.5,5.9-3.1,8.8-4.6
		c0.9-0.5,1.7-0.9,2.8-0.9c0.7,0,1.5,0,1.9,0.8c0.4,0.8,0.2,1.5-0.4,2.2c-1.4,1.9-3.6,2.7-5.6,3.7c-5.1,2.8-10.4,5.3-15.7,7.9
		C204,95.7,203.3,95.8,203,95.9z"/>
					<path fill={st14} d="M192.9,110c-1.7-0.2-2.9-1.3-4.2-2.3c-4.7-3.9-9.3-7.8-13.9-11.8c-0.5-0.4-1-0.8-1.3-1.3
		c-0.8-1.2-1.8-2.4-0.5-3.8c1.4-1.6,2.6-0.1,3.5,0.6c5.9,4.8,11.7,9.7,17.5,14.6c0.8,0.7,1.9,1.6,1.3,2.9
		C194.8,109.8,193.9,110.1,192.9,110z"/>
					<path fill={st11} d="M228,69.3c-0.1,3.4-2,5.3-5.4,5.3c-2.5,0-5.3-2.9-5.3-5.5c0-2.8,2.6-5.1,5.5-5C226.1,64.3,228,66.3,228,69.3z
		"/>
					<path fill={st11} d="M152.1,102.3c3.4,0,5.1,1.6,5.2,4.8c0,3.4-2.1,5.6-5.2,5.5c-2.8,0-5.5-2.9-5.4-5.7
		C146.6,104.2,148.9,102.3,152.1,102.3z"/>
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="190.6" y1="545.9" x2="130" y2="619.5" />
					<line fill='none' stroke='#6B4314' strokeMiterlimit='10' x1="217.5" y1="451.3" x2="116.9" y2="573.4" />
					<path fill={st11} d="M132.9,85.7c0,3.7-1.7,5.5-5.1,5.5c-3.2,0-5.3-2.2-5.3-5.4c0-3.1,1.9-4.8,5.2-4.8
		C130.9,80.8,132.9,82.7,132.9,85.7z"/>
				</g>
			</svg>
		</div >
	)
}

export default IceCream;