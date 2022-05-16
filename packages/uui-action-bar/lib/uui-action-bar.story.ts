import type { Story } from '@storybook/web-components';
import '@umbraco-ui/uui-action-bar/lib';
import '@umbraco-ui/uui-button/lib';
import '@umbraco-ui/uui-icon/lib';
import '@umbraco-ui/uui-icon-registry-essential/lib';

import { html } from 'lit-html';

export default {
  id: 'uui-action-bar',
  title: 'Buttons/Action Bar',
  component: 'uui-action-bar',
  args: {
    look: 'primary',
    color: 'primary',
  },
  argTypes: {
    look: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'outline', 'placeholder'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'positive', 'warning', 'danger'],
    },
  },
};

const buttons = ['copy', 'remove', 'delete'];

export const AAAOverview: Story = props => html`
  <uui-icon-registry-essential>
    <uui-action-bar
      >${buttons.map(
        el => html` <uui-button
          label="${el}"
          look="${props.look}"
          color="${props.color}">
          <uui-icon name="${el}"></uui-icon>
        </uui-button>`
      )}
    </uui-action-bar>
  </uui-icon-registry-essential>
`;

AAAOverview.storyName = 'Overview';

export const Single = () =>
  html`
    <uui-icon-registry-essential>
      <uui-action-bar>
        <uui-button label="Delete" look="outline"
          ><uui-icon name="delete"></uui-icon
        ></uui-button>
      </uui-action-bar>
    </uui-icon-registry-essential>
  `;

export const LooksAndColors = () => {
  const looks = ['default', 'primary', 'secondary', 'outline', 'placeholder'];
  const colors = ['primary', 'positive', 'warning', 'danger'];

  return html`
    <uui-icon-registry-essential>
      ${colors.map(
        color =>
          html`<div
            style="display: grid; grid-template-columns: repeat( auto-fill, 100px ); gap: 16px; margin-bottom: 32px">
            ${looks.map(
              look => html`
                <uui-action-bar
                  >${buttons.map(
                    el => html` <uui-button
                      label="${el}"
                      .look="${look}"
                      .color="${color}">
                      <uui-icon name="${el}"></uui-icon>
                    </uui-button>`
                  )}
                </uui-action-bar>
              `
            )}
          </div> `
      )}
    </uui-icon-registry-essential>
  `;
};

LooksAndColors.parameters = {
  docs: {
    source: {
      code: `
<uui-icon-registry-essential>
  <uui-action-bar>
    
    <uui-button look="[look]" color="[color]" label="Copy">
      <uui-icon name="copy"></uui-icon>
    </uui-button>

    <uui-button look="[look]" color="[color]" label="Remove">
      <uui-icon name="remove"></uui-icon>
    </uui-button>

    <uui-button look="[look]" color="[color]" label="Delete">
      <uui-icon name="delete"></uui-icon>
    </uui-button>

  </uui-action-bar>
</uui-icon-registry-essential>`,
    },
  },
};
