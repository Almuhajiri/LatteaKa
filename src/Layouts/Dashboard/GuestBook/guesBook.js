import React from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'

const datas = [
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    },
    {
        email: 'sitidahlia37@gmail.com'
    }
]

export default class GuestBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
    }

    componentWillMount() {
        axios.get('http://3.94.252.36/api/subscriber/show')
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
    }
    render() {
        function TableGuestBook(props) {
            let i = 1
            const items = props.datas.map((post) =>
                <tr>
                    <th>{i++}</th>
                    <td>{post.email} </td>
                </tr>
            )
            return (<tbody>{items}</tbody>)
        }
        return (
            <>
                <div className="p-5">
                    <p className="title">Daftar Buku Tamu</p>
                    <div style={{ borderTop: '5px solid #FD8F5F' }} className="p-2">
                        <Table className="table-hover table-bordered bg-white">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Pengunjung</th>
                                </tr>
                            </thead>
                            <TableGuestBook datas={datas} />
                        </Table>
                    </div>
                </div>
            </>
        )
    }
}