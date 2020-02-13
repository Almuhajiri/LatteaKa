import React from 'react'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

import { bold, colorPrimary } from '../../../assets/jss/styles'
import Button from '../../../Components/button'
import ButtonOutlined from '../../../Components/buttonOutlined'

export default class AddMenu extends React.Component {
    render() {
        return (
            <>
                <div className="p-5">
                    <p className="title">Tambah Menu</p>
                    <div style={{ borderTop: '5px solid #FD8F5F' }} className="p-2">
                        <Row>
                            <Col md="6">
                                <Form>
                                    <FormGroup>
                                        <Label style={bold} >Nama</Label>
                                        <Input type="text" name="title" placeholder="Nama Produk" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label style={bold}>Gambar</Label>
                                        <Input type="text" name="photo" placeholder="base64/image..." />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label style={bold}>Deskripsi</Label>
                                        <Input type="text" name="descrition" placeholder="Deskripsi Produk" />
                                    </FormGroup>
                                    <div className="d-flex justify-content-between">
                                        <ButtonOutlined title="Batal" style={{ borderColor: colorPrimary, color: colorPrimary }} />
                                        <Button title="Tambah menu" />
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className="d-block text-right">
                    </div>
                </div>
            </>
        )
    }
}