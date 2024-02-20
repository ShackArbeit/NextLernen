const DashboardLayout = ({
  children,
  users,
  reveneu,
  notification,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  reveneu: React.ReactNode;
  notification: React.ReactNode;
  login:React.ReactNode
}) => {
  const isLogin=true
  return isLogin? (
    <div>
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{reveneu}</div>
        </div>
        <div style={{display:'flex',flex:1}}>
            {notification}
        </div>
      </div>
    </div>
  ):(
    login
  )
};

export default DashboardLayout;
