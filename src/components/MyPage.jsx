import React, { useState } from 'react'
import {Row, Col, Form, Button, InputGroup} from 'react-bootstrap'
import ModalPostcode from './ModalPostcode'
import {app} from '../firebaseInit'
import {getFirestore, getDoc, doc, addDoc, collection} from 'firebase/firestore'
const MyPage = () => {
    const store = getFirestore(app);
    const [fileName, setFileName] = useState('https://via.placeholder.com/200x200');
    const [form, setForm] = useState({
        email: sessionStorage.getItem('email'),
        name:'무기명',
        address: '인천 미추홀구 인하로 100',
        phone: '032-860-7144'
    });
    const {email, name, address, phone} = form;
    const onChangeFile = (e) => {
        setFileName(URL.createObjectURL(e.target.files[0]));
    }
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const onPostcode = (address) => {
        setForm({
            ...form,
            address:address
        });
    }

    const onUpdate = async() => {
        await store.addDoc(collection(store, 'users'));

        console.log('user...........', user);
    }

    return (
        <Row className='my-5'>
            <Col>
                <h1 className='text-center mb-5'>회원정보</h1>
                <Form className='px-3'>
                    <InputGroup className='my-2'>
                        <InputGroup.Text className='px-5'>메 일</InputGroup.Text>
                        <Form.Control value={email} readOnly/>
                    </InputGroup>
                    <InputGroup className='my-2'>
                        <InputGroup.Text className='px-5'>성 명</InputGroup.Text>
                        <Form.Control value={name}
                            name="name" onChange={onChange}/>
                    </InputGroup>
                    <Row>
                        <Col xs={8}>
                            <InputGroup className='my-2'>
                                <InputGroup.Text className='px-5'>주 소</InputGroup.Text>
                                <Form.Control value={address}
                                    name="address" onChange={onChange}/>
                            </InputGroup>
                        </Col>
                        <Col>
                            <ModalPostcode onPostcode={onPostcode}/>
                        </Col>
                    </Row>
                    <InputGroup className='my-2'>
                        <InputGroup.Text className='px-5'>전 화</InputGroup.Text>
                        <Form.Control value={phone}
                            name="phone" onChange={onChange}/>
                    </InputGroup>
                    <div>
                        <img className='my-2' 
                            src={fileName} width="30%"/>
                        <Form.Control onChange={onChangeFile}
                            type="file"/>
                    </div>
                    <div className='text-center my-3'>
                        <Button 
                            onClick={onUpdate}
                            className='px-5'>정보저장</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}
export default MyPage