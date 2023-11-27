/* eslint-disable react/prop-types */


const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 py-8">
            <h3 className="text-3xl uppercase  py-4 text-white">{heading}</h3>
            <p className="bg-fuchsia-800 h-1 w-40 text-lg text-center mx-auto"></p>

        </div>
    );
};

export default SectionTitle;