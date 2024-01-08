import React from 'react'
import "./App.css"

// form control
import { Button, ButtonGroup, useDisclosure } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'

// data display
import { Badge } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'

// separate components
import CardChakra from './Chakra/Card'
import TableChakra from './Chakra/TableChakra'
import StateChakra from './Chakra/StateChakra'
import AlertChakra from './Chakra/AlertChakra'
import AccordionChakra from './Chakra/AccordionChakra'

// progress
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'

// toast
import { useToast } from '@chakra-ui/react'

// tooltip
import { Tooltip } from '@chakra-ui/react'
import TabsChakra from './Chakra/TabsChakra'

// icons
import { PhoneIcon, AddIcon, WarningIcon, EditIcon } from '@chakra-ui/icons'


const App = () => {

  const toast = useToast()

  return (
    <>

      {/* <Button colorScheme='green' variant="solid">Hello</Button> */}

      {/* <Checkbox colorScheme='red' /> */}

      {/* <PinInput otp>
      <PinInputField style={{margin:"0.5em", }} />
      <PinInputField style={{margin:"0.5em", }} />
      <PinInputField style={{margin:"0.5em", }} />
      <PinInputField style={{margin:"0.5em", }} />
      </PinInput> */}

      {/* <Switch id='email-alerts' colorScheme='purple' /> */}


      {/* <Badge colorScheme='green'>Verified</Badge> */}

      {/* <CardChakra /> */}

      {/* <Code colorScheme='yellow'>Hello World</Code> */}

      {/* <span>
      <Kbd style={{fontSize:"2em"}}>cltr</Kbd> <span style={{fontSize:"2em"}}>+</span> <Kbd style={{fontSize:"2em"}}>c</Kbd>
      </span> */}

      {/* <TableChakra /> */}

      {/* <StateChakra label="Last Month Working" amount="$400" ratio="20%" type="increase" /> */}

      {/* <AlertChakra variant="top-accent" status="warning" title="Alert" description="This is an error alert - check it out!" />
      <AlertChakra variant="solid" status="info" title="Alert" description="This is an error alert - check it out!" /> */}

      {/* <CircularProgress color='#0099ff' thickness={15} value={38} /> */}

      {/* <Progress colorScheme='pink' value={16} isIndeterminate /> */}

      {/* <Button onClick={() => toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'warning',
        duration: 1500,
        isClosable: true,
      })}>Toast</Button> */}

      {/* <Tooltip color="red" backgroundColor="yellow" label="Hello World" >
        Here
      </Tooltip> */}

      {/* <AccordionChakra title="This is a title" description="This is a description" /> */}

      {/* <TabsChakra /> */}

      {/* <PhoneIcon />
      <AddIcon />
      <WarningIcon />
      <EditIcon /> */}

    </>
  )
}

export default App