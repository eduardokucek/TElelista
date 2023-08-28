import { AxiosInterceptor } from "./AxiosInterceptor";
import { AuthProvider } from "./providers/AuthProviders";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AxiosInterceptor>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </AxiosInterceptor>
    </>
  );
};
