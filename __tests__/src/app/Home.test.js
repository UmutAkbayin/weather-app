import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'isomorphic-fetch';

import Home from '../../../src/app/page';

describe('Home', () => {
    it('renders Home component', async () => {
        render(await <Home />);
    });
});

// apparently no current solution to unit test server components