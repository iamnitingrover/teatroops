'use client';

import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { AppleButton } from './AppleButton';
import { createClient } from '@/lib/supabase/client';

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 8 characters' : null),
    },
  });
  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const supabase = createClient()
  //   //setError(null)
  //
  //   try {
  //     const { error } = await supabase.auth.signInWithPassword({
  //       form.getvalues.email,
  //       form.getvalues.password,
  //     })
  //     if (error) throw error
  //     // Update this route to redirect to an authenticated route. The user already has an active session.
  //     //router.push('/protected')
  //   } catch (error: unknown) {
  //     //setError(error instanceof Error ? error.message : 'An error occurred')
  //   } finally {
  //     //setIsLoading(false)
  //   }
  // }
  const handleSocialLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    // setIsLoading(true)
    // setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/oauth?next=/protected`,
        },
      })

      if (error) throw error
    } catch (error: unknown) {
      // setError(error instanceof Error ? error.message : 'An error occurred')
      // setIsLoading(false)
    }
  }

  return (
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome to Teatroops, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl" onClick={handleSocialLogin}>Google</GoogleButton>
          <AppleButton radius="xl" onClick={handleSocialLogin}>Twitter</AppleButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === 'register' && (
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    value={form.values.name}
                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                    radius="md"
                />
            )}

            <TextInput
                required
                label="Email"
                placeholder="hello@mantine.dev"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && 'Invalid email'}
                radius="md"
            />

            <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password && 'Password should include at least 6 characters'}
                radius="md"
            />

            {type === 'register' && (
                <Checkbox
                    label="I accept terms and conditions"
                    checked={form.values.terms}
                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
              {type === 'register'
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
  );
}