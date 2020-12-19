export const getEnv = (envName: string): string => {
    const value = process.env[envName]

    if (value === undefined) {
        throw Error(`Missing env variable ${envName}`)
    }

    return value
}
