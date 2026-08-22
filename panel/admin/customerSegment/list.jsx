import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>customerSegmentsSegment</th>
    <th>customerSegmentsCode</th>
    <th>customerSegmentsRule</th>
    <th>customerSegmentsState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.rule?.title}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
