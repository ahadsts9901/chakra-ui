import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabsChakra = () => {
    return (
        <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab>Four</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three</p>
                </TabPanel>
                <TabPanel>
                    <p>four</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabsChakra