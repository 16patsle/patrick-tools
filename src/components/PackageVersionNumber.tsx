export type PackageJson = {
  name: string
  version: string
  homepage?: string
  repository?:
    | {
        url?: string
      }
    | string
}

export const PackageVersionNumber = ({
  packageJson,
}: {
  packageJson: PackageJson
}) => {
  let url = `https://npm.im/${packageJson.name}`
  if (packageJson.homepage) {
    url = packageJson.homepage
  } else if (packageJson.repository) {
    let repoUrl
    if (typeof packageJson.repository === 'string') {
      repoUrl = packageJson.repository
    } else if (packageJson.repository.url) {
      repoUrl = packageJson.repository.url
    }

    if (repoUrl?.startsWith('https://') || repoUrl?.startsWith('http://')) {
      url = repoUrl
    }
  }

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
