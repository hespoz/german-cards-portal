import React, {Component} from "react";
import { Card, Flag, Table, Button} from 'semantic-ui-react'
import {get} from 'lodash';

import ViewMore from "./ViewMore";


const getFlagCode = (lang) => {
    switch (lang) {
        case 'en':
            return 'gb'
        case 'es':
            return 'es'
        default:
            return 'gb'
    }
}


const renderConjugation = (wordItem) => {

    console.log('conjugation',get(wordItem, 'verbProps.conjugation_present'))
    if (get(wordItem, 'verbProps.conjugation_present') === undefined || get(wordItem, 'verbProps.conjugation_present').length === 0) {
        return null
    }

    return <Table celled>

        <Table.Header>
            <Table.Row>
                <Table.HeaderCell textAlign={'center'}>Pronoum</Table.HeaderCell>
                <Table.HeaderCell textAlign={'center'}>Conjugation</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {get(wordItem, 'verbProps.conjugation_present').map((item, index) => {
                return <Table.Row key={index}>
                    <Table.Cell textAlign={'center'}>{item.pronoum}</Table.Cell>
                    <Table.Cell textAlign={'center'}>{item.conjugation}</Table.Cell>
                </Table.Row>
            })}
        </Table.Body>

    </Table>
}

const renderTranslations = (wordItem) => {

    if (get(wordItem, 'translations') === undefined) {
        return null
    }

    return <Table celled>

        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Translation</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {get(wordItem, 'translations').map((translation, index) => {
                return <Table.Row key={index}>
                    <Table.Cell><Flag name={`${getFlagCode(translation.lang)}`}/> {translation.translation}
                    </Table.Cell>
                    <Table.Cell>{translation.description}</Table.Cell>
                </Table.Row>
            })}
        </Table.Body>

    </Table>

}

const generateHeader = (item) => {

    switch (item.type) {
        case 'noun':
            return `${item.nounProps.article} ${item.word}`
        case 'verb':
            return `${item.word} - ${item.verbProps.perfect}`
        default:
            return ''
    }
}


class WordDescription extends Component {


    render() {

        const { wordItem } = this.props

        return (

            <Card fluid>
                <Card.Content header={generateHeader(wordItem)}/>
                <Card.Content>
                    <ViewMore initialHeight={'145px'}>
                        {renderTranslations(wordItem)}
                        {renderConjugation(wordItem)}
                    </ViewMore>
                </Card.Content>
                <Card.Content extra>
                    <Button basic fluid color='blue'>
                        Add to card
                    </Button>
                </Card.Content>
            </Card>

        )
    }

}


export default WordDescription;