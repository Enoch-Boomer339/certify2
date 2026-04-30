import { useLocation, Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
    const { state } = useLocation();

    // ✅ If no address in state, they didn't come through the wallet connect page
    if (!state?.address) {
        return <Navigate to="/admin" replace />;
    }

    return children;
};

export default ProtectRoute;