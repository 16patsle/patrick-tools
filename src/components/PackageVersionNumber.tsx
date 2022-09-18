type PackageJson = {
  name: string
  version: string
  homepage?: string
  repository?: {
    url?: string
  }
}

export const PackageVersionNumber = ({
  packageJson,
}: {
  packageJson: PackageJson
}) => {
  const url =
    packageJson.homepage ??
    packageJson.repository?.url ??
    `https://npm.im/${packageJson.name}`

  return (
    <div className=" mb-1 text-right text-sm text-gray-500">
      Using{' '}
      <a href={url} className="underline">
        {packageJson.name}
      </a>{' '}
      v{packageJson.version}
    </div>
  )
}
