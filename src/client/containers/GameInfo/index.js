import React from 'react';
import { map, equals, length } from 'ramda';
import { array, string } from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

import { getOwnerName } from '../../selectors/game';
import {
    Container,
    Label,
    Name,
    OwnerLabel,
    MeIcon
} from './styles';

const propTypes = {
    usersNames: array,
    owner: string,
    me: string,
}

export const GameInfo = ({ me, usersNames, owner }) => (
    <Container>
        <Label>{`Players ${length(usersNames)}/2`}</Label>
        {usersNames.map(name => 
            <Name key={uuidv1()}>
                {name}
                {equals(name, owner) && <OwnerLabel>(owner)</OwnerLabel>}
                {equals(name, me) && <MeIcon/>}
            </Name>
        )}
    </Container>
);

GameInfo.propTypes = propTypes;

const mapStateToProps = state => ({
    owner: getOwnerName(state),
});

export default connect(mapStateToProps)(GameInfo);