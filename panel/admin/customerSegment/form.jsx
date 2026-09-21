import {
    DateTime,
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='customerSegmentsCode'
        property='code'
        required
    />
    <Text
        placeholder='coreRule'
        property='rule'
    />
    <DateTime
        placeholder='customerSegmentsStartDate'
        property='startDate'
    />
    <DateTime
        placeholder='customerSegmentsEndDate'
        property='endDate'
    />
    <LongText
        placeholder='customerSegmentsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
