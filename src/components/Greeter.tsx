import * as React from 'react';

import styled from 'styled-components';

export type Props = {
    name: string;
};

const H1 = styled.h1`
    color: red;
    margin-bottom: 20px;
`;

export default function Greeter({ name }: Props): JSX.Element {
    return <H1>Hello, {name}!</H1>;
}
