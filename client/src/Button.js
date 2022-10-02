function Button(props) {
    const defaultClassnames = "border border-gray-300 bg-gray-300 text-reddit_dark rounded-full px-2 font-bold"
    return (
        <button {...props} className={defaultClassnames + props.className}/>
    );
}

export default Button;