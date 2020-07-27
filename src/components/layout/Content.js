import React from 'react'
import { Sidebar } from './Sidebar'
import { Tasks } from '../Tasks';

//Main Display of content with sidebar and task list
export const Content = () => (
    <section>
        <Sidebar />
        <Tasks />
    </section>
)