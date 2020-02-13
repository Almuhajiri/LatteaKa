// import React from 'react'
// import { Table } from 'reactstrap'

// import Button from '../../../Components/button'

// const datas = [
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
//     {
//         title: 'Original Thai Tea',
//         photo: 'base64/image...',
//         description: 'Original Thai tea is given a sweet flavor...'
//     },
// ]

// export default class MainDashboard extends React.Component {
//     render() {
//         function TableGuestBooks(props) {
//             let i = 1
//             const items = props.datas.map((post) =>
//                 <tr>
//                     <th>{i++}</th>
//                     <td>{post.title}</td>
//                     <td>{post.photo}</td>
//                     <td>{post.description}</td>
//                     <td></td>
//                 </tr>
//             )
//             return (<tbody>{items}</tbody>)
//         }
//         function TableMenus(props) {
//             let i = 1
//             const items = props.datas.map((post) =>
//                 <tr>
//                     <th>{i++}</th>
//                     <td>{post.title}</td>
//                     <td>{post.photo}</td>
//                     <td>{post.description}</td>
//                     <td></td>
//                 </tr>
//             )
//             return (<tbody>{items}</tbody>)
//         }
//         return (
//             <>
//                 <div className="p-5">
//                     <p className="title">Menu</p>
//                     <div style={{ borderTop: '5px solid #FD8F5F' }} className="p-2">
//                         <Table className="table-hover border bg-white">
//                             <thead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Judul</th>
//                                     <th>Gambar</th>
//                                     <th>Deskripsi</th>
//                                     <th>Aksi</th>
//                                 </tr>
//                             </thead>
//                             <TableGuestBook datas={datas} />
//                         </Table>
//                     </div>
//                     <div className="d-block text-right">
//                         <Button title="Tambah menu" />
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }