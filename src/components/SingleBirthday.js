import React from 'react';
import styled from "styled-components";

const SingleBirthday = (props) => {
    const {name, years, userAvatarUrl} = props.item;
    return (
        <Section>
            <AvatarImg src={userAvatarUrl} alt={name} />
            <UserData>
                <Name>{name}</Name>
                <Role>{years} {years != 1 ? 'years' : 'year'}</Role>
            </UserData>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-flow: row nowrap;
    margin: 1rem 0;
`;

const AvatarImg = styled.img`
    border-radius: 50%;
    height: 48px;
    width: 48px;
`;

const UserData = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin-left: 1rem;
`;

const Name = styled.h3`
    color: #333638;
    font-size: 1.5rem;
`;

const Role = styled.p`
    font-size: .750rem;
`;

export default SingleBirthday;
