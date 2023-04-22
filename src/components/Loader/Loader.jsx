import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
        wrapperStyle={{
            display: 'block',
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
    );
}