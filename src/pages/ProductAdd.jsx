import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import React from 'react'
import { Button } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 0 }

    const schema = Yup.object({
        productName: Yup.string().required("Urun adi zorunlu"),
        unitPrice: Yup.number().required("Urun fiyati zorunlu")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder="Urun Adi"/>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Urun Fiyati"/>
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
