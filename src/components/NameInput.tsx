import * as React from 'react';

import styled from 'styled-components';

export type Props = {
    name: string;
};

const Input = styled.input`
    border-radius: 4px;
    background-color: #fafafa;
    color: black;
    height: 16px;
    line-height: 16px;
`;

export default function NameInput({ name }: Props): JSX.Element {
    return <Input type="text" value={name} />;
}
