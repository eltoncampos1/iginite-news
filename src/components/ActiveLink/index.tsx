import Link, { LinkProps }  from 'next/link'
import { ReactElement, cloneElement } from 'react'
import { useRouter } from 'next/router'


interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeclassName: string;
}

export function ActiveLink( {children, activeclassName, ...rest}: ActiveLinkProps ){
    const { asPath } = useRouter();

    const className = asPath === rest.href 
        ? activeclassName
        : '';

    return (
        <Link {...rest}>
            {cloneElement(children, 
                {className}
                )}
        </Link>
    )
}