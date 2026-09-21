import {
    DateTime,
    DialogForm,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='customerSegmentsSegment'
        property='customerSegment'
        required
    />
    <Text
        placeholder='coreCustomer'
        property='customer'
        required
    />
    <DateTime
        placeholder='coreAssignedDate'
        property='assignedDate'
        required
    />
    <DateTime
        placeholder='coreExpiryDate'
        property='expiryDate'
    />
</>

export default <DialogForm inputs={inputs} />
