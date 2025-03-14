import { registerUserPermission } from '@/main/factories/services/actions/register-user-permission'
import { Button } from './ui/button'
import { RadioPermission } from './radio-permission'
import { redirect } from 'next/navigation'

export const LoginForm: React.FC = () => {
  async function registerPermission(formData: FormData) {
    'use server'
    const rawFormData = {
      permission: formData.get('permission'),
    }

    await registerUserPermission(rawFormData.permission?.toString() ?? '')
    redirect('/br/pt/home')
  }

  return (
    <form action={registerPermission} className="flex flex-col gap-4">
      <RadioPermission />
      <Button variant="outline" size="lg" type="submit">
        Login
      </Button>
    </form>
  )
}
