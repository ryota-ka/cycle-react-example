import * as React from 'react';

import { ReactSource } from '@cycle/react';
import { MemoryStream, Stream } from 'xstream';

import Greeter from './Greeter';
import NameInput from './NameInput';
import Incorporator from './Incorporator';

export type SoReact = { react: ReactSource };
export type SiReact = { react: Stream<React.ReactElement<any>> };

export type Sources = { react: ReactSource };
export type Sinks = { react: Stream<React.ReactElement<any>> };

function Main({ react }: Sources): Sinks {
    const name$: MemoryStream<string> = react
        .select('event-input-name')
        .events('change')
        .map((e: any) => (e.persist(), e.target.value))
        .startWith('');

    const vdom$: Stream<React.ReactElement<any>> = name$.map(name => (
        <div>
            <Greeter name={name} />
            <Incorporator sel="event-input-name">
                <NameInput name={name} />
            </Incorporator>
        </div>
    ));

    return {
        react: vdom$,
    };
}

export default Main;
