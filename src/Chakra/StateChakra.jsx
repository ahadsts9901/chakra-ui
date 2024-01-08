import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'

const StateChakra = (props) => {
    return (
        <Stat>
            <StatLabel>{props.label}</StatLabel>
            <StatNumber>{props.amount}</StatNumber>
            <StatHelpText>
                <StatArrow type={props.type} />
                {props.ratio}
            </StatHelpText>
        </Stat>
    )
}

export default StateChakra