import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>coreCustomer</th>
    <th>customerSegmentsSegment</th>
    <th>coreAssignedDate</th>
    <th>coreExpiryDate</th>
</>

const row = item => <>
    <td>{item.customer?.title}</td>
    <td>{item.customerSegment?.title}</td>
    <DateTime value={item.assignedDate} />
    <DateTime value={item.expiryDate} />
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
