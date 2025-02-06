import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react';
import projectAnnotations from './preview';

const project = setProjectAnnotations(projectAnnotations.input);

beforeAll(project.beforeAll);
