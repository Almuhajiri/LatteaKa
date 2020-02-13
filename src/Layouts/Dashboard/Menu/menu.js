/* eslint-disable no-extend-native */
import React from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'

import ButtonPrimary from '../../../Components/button'
import Edit from '../../../assets/svg/edit.svg'
import Delete from '../../../assets/svg/delete.svg'

export default class GuestBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
    }

    componentWillMount() {
        axios.get('http://3.94.252.36/api/menu/all')
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
    }

    render() {
        function TableGuestBook(props) {
            let i = 1
            const items = props.menus.map((post) =>
                <tr>
                    <th>{i++}</th>
                    <td>{post.title}</td>
                    <td>{post.photo.substring(0, [12]) + '...'}</td>
                    <td>{post.description.substring(0, [60]) + '...'}</td>
                    <td>
                        <div className="d-block">
                            <a className="m-2" href="/edit"><img src={Edit} alt="Edit" /></a>
                            <a className="m-2" href="/delete"><img src={Delete} alt="Delete" /></a>
                        </div>
                    </td>
                </tr>
            )
            return (<tbody>{items}</tbody>)
        }
        return (
            <>
                <div className="p-5">
                    <p className="title">Menu</p>
                    <div style={{ borderTop: '5px solid #FD8F5F' }} className="p-2">
                        <Table className="table-hover table-bordered bg-white">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Judul</th>
                                    <th>Gambar</th>
                                    <th>Deskripsi</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <TableGuestBook menus={this.state.menus} />
                        </Table>
                    </div>
                    <div className="d-block text-right">
                        <ButtonPrimary title="Tambah menu" />
                    </div>
                </div>
            </>
        )
    }
}