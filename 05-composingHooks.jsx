const useCurrentUser = () => {
  const user = useSelector((state) => state.currentUser)
  return user
}

const usePermissions = () => {
  const user = useCurrentUser()
  return user.permissions
}

const UserDetailsPage = () => {
  const user = useCurrentUser()

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.address}</p>
    </div>
  )
}

const AdminPage = () => {
  const permissions = usePermissions()

  if (!permissions.canViewAdmin) return <NotFoundPage />

  return (
    <div>
      <h1>Admin</h1>
      <AdminControls />
    </div>
  )
}
