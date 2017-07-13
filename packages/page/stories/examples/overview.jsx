import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';

export default (
  <Page>
    <Grid>
      <GridColumn medium={8}>
        <h1>Main heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
          perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
          quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
        </p>
      </GridColumn>
      <GridColumn medium={4}>
        <h2>Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
          perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
          quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
        </p>
      </GridColumn>
      <GridColumn>
        <h2>Content below which takes up remaining space</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
          perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
          quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
        </p>
      </GridColumn>
    </Grid>
  </Page>
);
