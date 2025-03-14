'use client'

import { useState } from 'react'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

export const RadioPermission = () => {
  const [permissionState, setPermissionState] = useState('Internal')

  return (
    <>
      <input type="hidden" name="permission" value={permissionState} />
      <RadioGroup
        defaultValue="internal"
        className="flex items-center justify-center"
        onValueChange={setPermissionState}
      >
        <div>
          <RadioGroupItem
            value="Internal"
            id="internal"
            className="peer sr-only"
          />
          <Label
            htmlFor="internal"
            className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
          >
            Internal
          </Label>
        </div>
        <div>
          <RadioGroupItem
            value="External"
            id="external"
            className="peer sr-only"
          />
          <Label
            htmlFor="external"
            className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
          >
            External
          </Label>
        </div>
      </RadioGroup>
    </>
  )
}
