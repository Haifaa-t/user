import {
    Mail,
    Phone,
    Building2,
    Globe,
    MapPin,
    CheckCircle,
    XCircle
  } from 'lucide-react';
  
  type Props = {
    label: string;
    value: string | boolean;
    isTodo?: boolean;
  };
  
  const UserDetailInfo = ({ label, value, isTodo = false }: Props) => {
    const icons: Record<string, JSX.Element> = {
      Email: <Mail className="w-5 h-5 text-red-600" />,
      Phone: <Phone className="w-5 h-5 text-red-600" />,
      Company: <Building2 className="w-5 h-5 text-red-600" />,
      Website: <Globe className="w-5 h-5 text-red-600" />,
      Address: <MapPin className="w-5 h-5 text-red-600" />
    };
  
    return (
      <div className="flex items-center gap-2 text-gray-800">
        {isTodo ? (
          value === true ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600" />
          )
        ) : (
          icons[label]
        )}
        <strong className="text-gray-900">{label}:</strong>
        {!isTodo && <span>{value}</span>}
      </div>
    );
  };
  
  export default UserDetailInfo;
  