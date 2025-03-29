import React from "react";
import '../../styles/Contact.css';
import {Form, Button, Input } from 'antd';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { orange, red, lightBlue, lightGreen } from '@mui/material/colors';
import emailjs from '@emailjs/browser';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
};

const sendEmail = (e) => {
    e.preventDefault();

    const service_id = 'YOUR_SERVICE_ID';
    const template_id = 'template_aq16tgs';
    const user_id = '8JzeNtGbNWVRuiDzT';

    emailjs.sendForm(service_id, template_id, user_id, e.target)
    .then((result) => {
        alert('Message Sent Successfully', result)
    },
    (error) => {
        alert('Something went wrong, please try again later or try with social media', error)
    }
    );
    e.target.reset();

};


const Contact = () => {

    return (
        <div className="box-c">
            <Form  className="box-d" {...layout} onSubmitCapture={sendEmail}>
                <Form.Item className="item"
                    label="Name"
                    name="from_name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className="item"
                    label="Email"
                    name="from_email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className="item"
                    label="Message"
                    name="message"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label={null} className="item">
                    <Button type="primary" htmlType="submit" value="Send" >Submit</Button>
                </Form.Item>
                <Form.Item label={null} className="item1" > 
                    <h2>Social Media</h2>
                    <a href="https://www.instagram.com/abishek.m_vd/" ><InstagramIcon fontSize='large' sx={{ color: orange[500] }}/></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" ><EmailIcon fontSize='large' sx={{ color: red[500] }}/></a>
                    <a href="https://www.instagram.com/abishek.m_vd/" ><FacebookIcon fontSize='large' sx={{ color: lightBlue[500] }} /></a>
                    <a href="https://www.instagram.com/abishek.m_vd/" ><WhatsAppIcon fontSize='large' sx={{ color: lightGreen[500] }}/></a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Contact;