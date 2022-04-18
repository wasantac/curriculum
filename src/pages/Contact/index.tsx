import React from "react";
import Form from "../../components/Form";
import PageWrapper from "../../components/PageWrapper";
import "./index.scss";
const Contact = () => {
    return (
        <>
            <PageWrapper>
                <div className="container mh-100">
                    <div className="d-flex justify-content-center align-items-center ">
                        <Form></Form>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};

export default Contact;
