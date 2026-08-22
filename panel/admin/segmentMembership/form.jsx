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
        placeholder='customerSegmentsCustomer'
        property='customer'
        required
    />
    <DateTime
        placeholder='customerSegmentsAssignedDate'
        property='assignedDate'
        required
    />
    <DateTime
        placeholder='customerSegmentsExpiryDate'
        property='expiryDate'
    />
</>

export default <DialogForm inputs={inputs} />
