interface Serializer<T, T1> {
    serialize(data: T): T1;
    deserialize(data: T1): T;
}

export default Serializer;
