export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('studio:auth:login', async ({ user, event }) => {
    console.log(`User ${user.email} logged in via ${user.provider}`)
  })
})
