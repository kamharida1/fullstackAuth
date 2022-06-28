import { StyleSheet, ScrollView, Text, View, Switch } from 'react-native'
import React, { ReactElement, useState } from 'react'

import { Background } from '../../../components/Background'
import { Button, ButtonCircle, ButtonComments, ButtonDeveloperSub, Space, Avatar, ButtonIconCircle, ButtonLink, ButtonMarkDecision, ButtonStatusIssue, ButtonText, CardAbout, CardCareer, CardContacts, CardEducation, CardInfo, Cardissue, CardIssueResponse, CardIssueResponseSub, Star, CardResume, CardVacancies, Cost, Developer, HeaderMaster, Input, TabCompany, TabDeveloper, TextError } from '../../../components'
import { string } from 'yup'
import { useTheme } from '@react-navigation/native'


const text = "This is the freedom we have all been praying for to happen in this our country"

const objResume1 = {
  title: 'Accountant General',
  avatar: "https://picsum.photos/id/40/200/300",
  rate: 50,
  cost: 25,
}
const objResume2 = {
  position: 'Accountant',
  language: 'Chinese',
  stack: 'Software Development',
  experience: 'An extremely long text that seem not to enter into the mind of the inexperienced candidate who feels theirs need to overturn the government of the united states of America',
}

const objUser = {
  name: 'Nnamdi Agu',
  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  star: true
}

const objIssue = {
  title: 'Programming the web',
  description: 'Web programming for life',
  uri: 'https://picsum.photos/id/30/200/300',
  name: 'React Native',
  comments: 24,
  rate: 25
}

const objIssueResponse = {
  description: 'DataBase Forever',
  uri: 'https://picsum.photos/id/50/200/300',
  name: 'MongoDB',
  comments: 96,
  rate: 50
}

const objVacancy = {
  title: 'Senior Techical Officer In charge',
  description: 'Takes care of the servers.',
  owner: 'Tech Corp',
  rate: "40"
}

const objIssueResponseSub = {
  description: 'Arango for life',
  uri: 'https://picsum.photos/id/87/200/300',
  name: 'Arango DB ',
  rate: 45
}


const objInfo = {
  position: 'Senior Manager',
  language: "English",
  stack: 'Mobile Stack',
  experience: 'Worked in the minimal places under hard pressurre from beyond.Thanks. Extend this words to your friends',
  salary: 40.44,
  user: true
}

const objEducation = {
  institution: 'Enugu State University of Science and Technology',
  start: '03:20',
  finish: '03:30',
  description: 'Touted as one of the best schools in the east',
  link: 'http://goodwill.com'
}

const objCareer = {
  institution: 'Unizik',
  start: '03:20',
  finish: '03:30',
  description: 'Hello world',
  link: 'Thats it'
}

const objContacts = {
  location: 'Nuxemborg',
  web: 'https://agubrothers.com',
  phone: '+234-9099234242',
 
}

const Hello = (): ReactElement => {

  const [enabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { dark } = useTheme()
  
  return (
    <>
      <ScrollView contentContainerStyle={styles.contentStyle}>
        <Background />
        <Space height={10} />
        <Switch />
        <Space height={10} />
        <Avatar uri={"https://picsum.photos/id/1/200/300"} size="xLarge" />
        <Space height={10} />
       <Button textStyle={{ fontSize: 40, width: 400 }} title='Hello World' />
        <Space height={20} />
        <ButtonCircle title='Hello World' />
        <Space height={20} />
        <ButtonComments title='Hello World' />
        <Space height={10} />
        <ButtonDeveloperSub title='Helloworld' rate={'45'} />
         <Space height={10} />
        <ButtonIconCircle name='vampire' />
        <Space height={10} />
        <ButtonLink title='Hello World' />
        <Space height={20} />
        <ButtonMarkDecision />
        <Space height={20} />
        <ButtonStatusIssue title='Lorem' />
        <Space height={20} />
        <ButtonText title='Lorem' />
        <Space height={20} />
        <CardAbout title={text} />
        <Space height={20} />
        <CardCareer obj={ objCareer}/>
        <Space height={20} />
        <CardContacts obj={objContacts} />
        <Space height={20} />
        <CardEducation obj={objEducation} />
        <CardInfo bool obj={objInfo} />
        <Cardissue obj={objIssue} />
        <CardIssueResponse obj={objIssueResponse} />
        <CardIssueResponseSub obj={objIssueResponseSub} />
        <Space height={10} />
        <CardResume obj={objResume1} obj2={objResume2} />
        <CardVacancies detail obj={objVacancy} />
        <Space height={10} />
        <Cost title='50.00' />
        <Space height={10} />
        <Developer uri='https://picsum.photos/id/87/200/300' rate='100' title='Hello Universe' />
        <Space height={20} />
          <HeaderMaster user={objUser} />
        <Space height={90} />
        <Input />
        <Space height={20} />
        <TabCompany setTab={() => 0} />
        <TabDeveloper />
        <TextError title='Hello world' />
      </ScrollView>
      <Space height={60} />
    </>
   
  )
}

export { Hello }

const styles = StyleSheet.create({
  contentStyle: {
    padding: 10,
    bottom: 20
  }
})