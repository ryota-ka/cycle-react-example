import * as React from 'react';

import { incorporate } from '@cycle/react/lib/cjs/incorporate';

export type Props = {
    sel: string | symbol;
    children: React.ReactNode;
};

function Incorporator<P = any>(props: Props): React.ReactElement<P> {
    const { children, sel } = props;

    return React.createElement<any>(incorporate('div'), { sel }, children);
}

export default Incorporator;
