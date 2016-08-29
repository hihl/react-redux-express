import React from 'react';
import Button from '../button';
import Icon from '../icon';
import Dropdown from './dropdown';
const ButtonGroup = Button.Group;
import classNames from 'classnames';
import { pureRender } from '../../utils';

@pureRender
export default class DropdownSplitButton extends React.Component {
  static defaultProps = {
    align: {
      points: ['tr', 'br'],
      overlay: {
        adjustX: 1,
        adjustY: 1,
      },
      offset: [0, 4],
      targetOffset: [0, 0],
    },
    type: 'default',
  }

  render() {
    const { type, overlay, trigger, align, children, className, onClick, ...restProps } = this.props;
    const cls = classNames({
      'shield-dropdown-split-button': true,
      className: !!className,
    });
    return (
      <ButtonGroup {...restProps} className={cls}>
        <Button type={type} onClick={onClick}>{children}</Button>
        <Dropdown align={align} overlay={overlay} trigger={trigger}>
          <Button type={type}>
            <Icon type="down" />
          </Button>
        </Dropdown>
      </ButtonGroup>
    );
  }
}