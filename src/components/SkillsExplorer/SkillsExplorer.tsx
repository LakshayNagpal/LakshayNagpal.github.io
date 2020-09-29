import { Typography } from '@material-ui/core';
import React from 'react';
import cn from 'classnames';

import { SkillItemElement } from './SkillItem';
import { SkillsFolderElement } from './SkillsFolder';

import { useStyles } from './SkillsExplorer.styles';

export interface SkillsExplorerProps {
  className?: string;
  children:
    | SkillItemElement
    | SkillItemElement[]
    | SkillsFolderElement
    | SkillsFolderElement[];
}

export const SkillsExplorer: React.FC<SkillsExplorerProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={cn(classes.root, props.className)}>
      <div className={classes.childrenWrapper}>{props.children}</div>
    </div>
  );
};
