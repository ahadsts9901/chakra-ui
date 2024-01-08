import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

const AlertChakra = (props) => {
    return (
        <Alert variant={props.variant} status={props.status}>
            <AlertIcon />
            <AlertTitle>{props.title}</AlertTitle>
            <AlertDescription>{props.description}</AlertDescription>
        </Alert>
    )
}

export default AlertChakra