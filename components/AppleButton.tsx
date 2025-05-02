import { Button, ButtonProps } from '@mantine/core';
import { FaApple } from 'react-icons/fa6';

export function AppleButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
    return (
        <Button leftSection={<FaApple size={16} color="#00ACEE" />} variant="default" {...props} />
    );
}