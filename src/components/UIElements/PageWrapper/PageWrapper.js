import React from "react";

import { Image,PageWrapper as StyledPageWrapper }  from './PageWrapper.styled';

const PageWrapper = ({ background, className,  children }) => {







  return <StyledPageWrapper className={className}> <Image src={background}  /> {children}</StyledPageWrapper>;
};

export default PageWrapper;
